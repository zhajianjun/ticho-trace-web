import { defHttp } from '/@/utils/http/axios';
import { Trace } from '/@/api/trace/model/traceModel';

enum Api {
  GetByTraceId = '/trace/getByTraceId',
}

/**
 * @description: getUserInfo
 */
export function getByTraceId(params: string) {
  return defHttp.get<Trace>(
    { url: Api.GetByTraceId, params },
    { successMessageMode: 'message', errorMessageMode: 'message' },
  );
}
