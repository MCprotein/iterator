import { TaskRunner } from './6-22.runTasksWithPool';

export function* map<A, B>(
  f: (value: A) => B,
  iterable: Iterable<A>
): IterableIterator<B> {
  for (const value of iterable) {
    yield f(value);
  }
}

class TaskPool<T> {
  private readonly taskIterator: IterableIterator<TaskRunner<T>>;
  private readonly pool: TaskRunner<T>[] = [];
  public poolSize: number;

  constructor(fs: Iterable<() => Promise<T>>, poolSize: number) {
    this.taskIterator = map((f) => new TaskRunner(f), fs);
    this.poolSize = poolSize;
  }

  setPoolSize(poolSize: number) {
    this.poolSize = poolSize;
  }

  private canExpandPool() {
    return this.pool.length < this.poolSize;
  }

  private async run(errorHandle: (err: unknown) => unknown) {
    const { pool, taskIterator } = this;
    const tasks: TaskRunner<T>[] = [];

    while (true) {
      const { done, value: nextTask } = taskIterator.next();
      if (!done) {
        pool.push(nextTask);
        tasks.push(nextTask);
        if (this.canExpandPool()) continue;
      }
      if (done && pool.length === 0) break;
      await Promise.race(pool.map((task) => task.run())).catch(errorHandle);
      pool.splice(
        pool.findIndex((task) => task.isDone),
        1
      );
    }

    return tasks.map((task) => task.promise);
  }

  async runAll() {
    return Promise.all(await this.run((err) => Promise.reject(err)));
  }

  async runAllSettled() {
    return Promise.allSettled(await this.run((err) => Promise.reject(err)));
  }
}
