import UUID from 'uuid';
import { User } from './User';


const user = new User('海老原', '賢次', 44); // 名前と年齢は適当に

const contentsElem = document.getElementById('contents');
if(!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;

saibanButton.onclick = (e) => {
  uuidSpan.innerText = UUID.v4();
}