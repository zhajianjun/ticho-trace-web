import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';
import { useUserStore } from '/@/store/modules/user';


function getSystem() {
  const userStore = useUserStore();
  const {systems} = userStore?.getUserInfo;
  return systems.map((item)=>{
    return{
      label: item.systemName,
      value: item.systemId,
    }
  })
}

function getFirstSystemId() {
  const userStore = useUserStore();
  const {systems} = userStore?.getUserInfo;
  return systems[0].systemId;
}

export function getSearchColumns(): Partial<FormProps> {
  return {
    labelWidth: 180,
    schemas: [
      {
        field: `systemId`,
        label: `系统id`,
        component: 'Select',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入系统id',
          style: {
            width: '100%',
          },
          options: getSystem(),
        },
        defaultValue: getFirstSystemId(),
      },
      {
        field: `traceId`,
        label: `链路id`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入链路id',
        },
      },
      {
        field: `spanId`,
        label: `跨度id`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入跨度id',
        },
      },
      {
        field: `appName`,
        label: `应用名称`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入应用名称',
        },
      },
      {
        field: `env`,
        label: `应用环境`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入应用环境',
        },
      },
      {
        field: `ip`,
        label: `ip`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入ip',
        },
      },
      {
        field: `preAppName`,
        label: `上个链路的应用名称`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入上个链路的应用名称',
        },
      },
      {
        field: `preIp`,
        label: `上个链路的Ip`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入上个链路的Ip',
        },
      },
      {
        field: `logLevel`,
        label: `日志级别`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入日志级别',
        },
      },
      {
        field: `startDateTime`,
        label: `日志时间起`,
        colProps: {
          xl: 12,
          xxl: 8,
        },
        component: 'DatePicker',
        required: true,
        componentProps: {
          placeholder: '请输入日志时间起',
          // 传给后端的时间格式--
          valueFormat: 'YYYY-MM-DD HH:mm:ss.000',
          // 显示的时间格式
          showTime: {
            format: 'YYYY-MM-DD HH:mm:ss',
          },
          // 设置不可选
          disabledDate: (current) => {
            // 不可选择未来时间
            return current && current > Date.now();
          },
          style: {
            width: '100%',
          },
        },
        defaultValue: moment().add(-7, 'd'),
      },
      {
        field: `endDateTime`,
        label: `日志时间止`,
        colProps: {
          xl: 12,
          xxl: 8,
        },
        component: 'DatePicker',
        required: true,
        componentProps: {
          placeholder: '请输入日志时间止',
          // 传给后端的时间格式--
          valueFormat: 'YYYY-MM-DD HH:mm:ss.999',
          // 显示的时间格式
          showTime: {
            format: 'YYYY-MM-DD HH:mm:ss',
          },
          // 设置不可选
          disabledDate: (current) => {
            // 不可选择未来时间
            return current && current > Date.now();
          },
          style: {
            width: '100%',
          },
        },
        defaultValue: Date.now(),
      },
      {
        field: `className`,
        label: `类名称`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入类名称',
        },
      },
      {
        field: `method`,
        label: `方法名`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入方法名',
        },
      },
      {
        field: `content`,
        label: `内容`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入内容',
        },
      },
      {
        field: `isAsc`,
        label: `是否按照时间递增排序`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
        componentProps: {
          placeholder: '请输入是否按照时间递增排序',
        },
      },
    ],
  };
}
export function getTableColumns(): BasicColumn[] {
  return [
    {
      title: '链路id',
      dataIndex: 'traceId',
    },
    {
      title: '跨度id',
      dataIndex: 'spanId',
    },
    {
      title: '应用名称',
      dataIndex: 'appName',
    },
    {
      title: '应用环境',
      dataIndex: 'env',
    },
    {
      title: 'ip',
      dataIndex: 'ip',
    },
    {
      title: '上个链路的应用名称',
      dataIndex: 'preAppName',
    },
    {
      title: '上个链路的Ip',
      dataIndex: 'preIp',
    },
    {
      title: '日志级别',
      dataIndex: 'logLevel',
    },
    {
      title: '日志时间',
      dataIndex: 'dateTime',
    },
    {
      title: '日志时间戳',
      dataIndex: 'dtTime',
    },
    {
      title: '类名称',
      dataIndex: 'className',
    },
    {
      title: '方法名',
      dataIndex: 'method',
    },
    {
      title: '序列号',
      dataIndex: 'seq',
    },
    {
      title: '内容',
      dataIndex: 'content',
    },
    {
      title: '线程名称',
      dataIndex: 'threadName',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
  ];
}
