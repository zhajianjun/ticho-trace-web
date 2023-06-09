export interface Trace {
  id: string;
  systemId: string;
  systemName: string;
  traceId: string;
  spanId: string;
  appName: string;
  env: string;
  ip: string;
  preAppName: string;
  preIp: string;
  type: string;
  url: string;
  port: string;
  fullUrl: string;
  method: string;
  status: number;
  start: number;
  end: number;
  startTime: string;
  endTime: string;
  consume: number;
  createTime: string;
}
