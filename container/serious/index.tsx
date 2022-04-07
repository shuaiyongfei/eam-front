import {Card, Table,Typography} from "antd";
import React from "react";

const { Title} = Typography;

const  Serious=()=>{

 
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      width: '10%',
    },
    {
      title: '高后果区识别项',
      dataIndex: 'focus',
      width: '60%',
      
    },
    {
      title: '等级',
      dataIndex: 'level',
      width: '10%',
    },
    {
      title: '类型',
      dataIndex: 'kind',
      width: '20%',
    },
  ];

  const qidata=[
    {
      id:1,
      focus:`管道中心线两侧各 200m 范围内，任意划分成长度 2km 并能包括最大聚
      居户数的若干段，四层及四层以上楼房（不计地下室层数）普遍集中、交
      通频繁、地下设施多的区段。`,
    level:'III',
    kind:'人员密集型',
    },
    {
      id:2,
      focus:`管道中心线两侧各 200m 范围内任意划分 2km 长度并能包括最大聚居户
      数的若干地段，户数在 100 户以上的区段，包括市郊居住区、商业区、工
      业区、发展区以及不够四级地区条件的人口稠密区。`,
      level:`II`,
      kind:'人员密集型',
    },
    {
      id:3,
      focus:`如管径大于 762mm，并且最大允许操作压力大于 6.9MPa，其天然气管
      道潜在影响区域内有特定场所的区域（潜在影响半径按照式 GB32167（1）
      计算）。`,
      level:`I`,
      kind:'人员密集型',
    },
    {
      id:4,
      focus:`如管径大于 762mm，并且最大允许操作压力大于 6.9MPa，其天然气管
      道潜在影响区域内有特定场所的区域（潜在影响半径按照式 GB32167（1）
      计算）。`,
      level:`I`,
      kind:'人员密集型',
    },
    {
      id:5,
      focus:`其他管道两侧各 200m 内有特定场所的区域`,
      level:`I`,
      kind:'人员密集型',
    },
    {
      id:6,
      focus:`除三、四级地区外，管道两侧各 200m 内有加油站、油库等易燃易爆场所。`,
      level:`II`,
      kind:'易燃易爆场所',
    },
   ]
  
  const youdata=[
    {
      id:1,
      focus:`管道中心线两侧各 200m 范围内，任意划分成长度 2km 并能包括最大聚
      居户数的若干段，四层及四层以上楼房（不计地下室层数）普遍集中、交
      通频繁、地下设施多的区段`,
    level:'III',
    kind:'人员密集型',
    },
    {
      id:2,
      focus:`管道中心线两侧各 200m 范围内任意划分 2km 长度并能包括最大聚居户
      数的若干地段，户数在 100 户以上的区段，包括市郊居住区、商业区、工
      业区、发展区以及不够四级地区条件的人口稠密区。`,
      level:`II`,
      kind:'人员密集型',
    },
    {
      id:3,
      focus:`管道两侧各 200m 内有聚居户数在 50 户或以上的村庄、乡镇等`,
      level:`II`,
      kind:'人员密集型',
    },
    {
      id:4,
      focus:`管道两侧各 50m 内有高速公路、国道、省道、铁路及易燃易爆场所等`,
      level:`I`,
      kind:'交通设施',
    },
    {
      id:5,
      focus:`管道两侧各 200m 内有湿地、森林、河口等国家自然保护区。`,
      level:`II`,
      kind:'环境敏感型',
    },
    {
      id:6,
      focus:`管道两侧各 200m 内有水源、河流、大中型水库`,
      level:`III`,
      kind:'环境敏感型',
    },
   ]
  
  return (
    <>
      <Card title={<Title>输气管道高后果区识别准则</Title>} bordered={false} style={{ width:"100%" }}>
          <Table
          bordered
          columns={columns}
          dataSource={qidata}
          pagination={{disabled:false,hideOnSinglePage:true}}
          />
      </Card>
      <Card title={<Title>输油管道高后果区识别准则</Title>} bordered={false} style={{ width: "100%" }}>
          <Table
          bordered
          columns={columns}
          dataSource={youdata}
          pagination={{disabled:false,hideOnSinglePage:true}}
          />
      </Card>
    </>
  );
}



export default Serious