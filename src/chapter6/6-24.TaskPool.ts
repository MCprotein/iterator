import { TaskRunner } from './6-22.runTasksWithPool';

class TaskPool<T> {
  private readonly tasks: TaskRunner<T>[];
  private readonly pool: TaskRunner<T>[] = [];
  public poolSize: number;

  constructor(fs: (() => Promise<T>)[], poolSize: number) {
    this.tasks = fs.map((f) => new TaskRunner(f));
    this.poolSize = poolSize;
  }

  setPoolSize(poolSize: number) {
    this.poolSize = poolSize;
  }

  private canExpandPool() {
    return this.pool.length < this.poolSize;
  }

  async runAll() {
    const { pool, tasks } = this;

    let i = 0;
    const { length } = tasks;

    while (i < length) {
      const nextTask = tasks[i];
      pool.push(nextTask);
      const isNotLast = ++i < length;
      if (isNotLast && this.canExpandPool()) continue;
      await Promise.race(pool.map((task) => task.run()));

      pool.splice(
        pool.findIndex((task) => task.isDone),
        1
      );
    }

    return Promise.all(tasks.map((task) => task.promise));
  }
}
