export class TaskRunner<T> {
  private _promise: Promise<T> | null = null;
  private _isDone = false;
  get promise() {
    return this._promise ?? this.run();
  }
  get isDone() {
    return this._isDone;
  }

  constructor(private f: () => Promise<T>) {}

  async run() {
    if (this._promise) {
      return this._promise;
    }

    return (this._promise = this.f().then((res) => {
      this._isDone = true;
      return res;
    }));
  }
}

export async function runTasksWithPool<T>(
  fs: (() => Promise<T>)[],
  poolSize: number
): Promise<T[]> {
  const tasks = fs.map((f) => new TaskRunner(f));

  let pool: TaskRunner<T>[] = [];
  for (const nextTask of tasks) {
    pool.push(nextTask);
    if (pool.length < poolSize) continue;
    await Promise.race(pool.map((task) => task.run()));
    pool.splice(
      pool.findIndex((task) => task.isDone),
      1
    );
  }

  return Promise.all(tasks.map((task) => task.promise));
}
