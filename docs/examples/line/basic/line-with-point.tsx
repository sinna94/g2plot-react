import React from 'react'
import { LineChart } from '@opd/g2plot-react'
import { LineConfig } from '@antv/g2plot'

const config: LineConfig = {
  title: {
    visible: true,
    text: '带数据点的折线图',
  },
  description: {
    visible: true,
    text: '将折线图上的每一个数据点显示出来，作为辅助阅读。',
  },
  forceFit: true,
  padding: 'auto',
  data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ],
  xField: 'year',
  yField: 'value',
  point: {
    visible: true,
  },
  label: {
    visible: true,
    type: 'point',
  },
}

const SmoothLine = () => <LineChart {...config} />

export default SmoothLine
