/* eslint-disable */
//Global
// {
//     'enviromentRecord':{
//         'message':'Test',
//         'weight': 55,
//         'createMassanger':function
//     }'OuterLexicalEnviroment':null;

// }
//createMessenger()

// {
//     'enviromentRecord':{
//         'message':'Just learn IT',
//         'Sender':'Gromcode,
//         'senMassage':function

//     }'outerLexicalEnviroment':global;
//run()
//     'enviromentRecord':{ }
//
//     }'outerLexicalEnviroment':global;
//sendMesage()
//     'enviromentRecord':{ }
//
//     }'outerLexicalEnviroment':createMessenger;

for (let i = 0; i < 25; i++) {
  console.log(i);
}
const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
messanger.sendMessage('TestName');
run();
//scope область видимости переменных
//lexical enviroment создается при вызове функции
//после выполнения удаляется после выполнения функции и если на нее ничто не ссылается больше
