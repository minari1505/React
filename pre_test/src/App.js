import React, {useState, useRef} from 'react';


function App() { 
  return (
    <div style={{ padding: '200px', textAlign: 'left'}}>
      <p>시험은 하루에 한 번만 볼 수 있습니다. 중도 이탈 시 데이터는 저장되지 않습니다.</p>
      <p>문제 음성은 총 두 번 들려드립니다.</p>
      <p>조용한 환경에서 응시해주세요. 보다 정확한 결과가 나옵니다.</p>
      <p>마이크를 허용해주시고, 아래 버튼으로 녹음하여 녹음이 제대로 되는지 확인하세요.</p>
      <button style={{ marginTop: '20px', padding: '10px 20px'}}> Start Recording</button>
    </div>
  )
}


export default App;