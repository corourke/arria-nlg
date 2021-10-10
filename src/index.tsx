import React, { useState } from 'react';
import { ComponentProps } from '@incorta-org/component-sdk';
import './styles.less';
import axios, { AxiosRequestConfig } from 'axios';
import portfolio_data from './temp/financial.json';
import ProcessNLG from './ProcessNLG';

console.log(portfolio_data);

const config: AxiosRequestConfig = {
  method: 'post',
  url: 'https://app.studio.arria.com:443/alite_content_generation_webapp/text/z2Kznpam5Be',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJUVmQ3cFk1WXR1UTZPOUxaZTZIcS1IemUiLCJpYXQiOjE1ODIwNTIyMzEsImV4cCI6MTczOTczMjIzMSwiaXNzIjoiQUxpdGUiLCJzdWIiOiItUjRVYlJ1eVp3eEkiLCJBTGl0ZS5wZXJtIjpbInByczp4OnoyS3pucGFtNUJlIl0sIkFMaXRlLnR0IjoidV9hIn0.c8gpCCKD-erSi0F-B38ohPOCGWuRkDomYOFJK9NiFCuTaVgS59h2vznMyX-ex2NE9t9PbTkdFfGQbCkAPdrYLQ'
  },
  data: portfolio_data
};

const ArriaNlg = (props: ComponentProps) => {
  const [result, setResult] = useState<string>('');

  console.log(props);

  // axios(config)
  // .then(response => {
  //   console.log('AXIOS NLG ', response.data);
  //   const data = response.data as { result: string };
  //     setResult(data.result);
  // })
  // .catch(error => {
  //   console.log('AXIOS NLG ', error);
  // });

  return (
    <div className="nlgOutput">
      <ProcessNLG />
    </div>
  );
};

export default ArriaNlg;
