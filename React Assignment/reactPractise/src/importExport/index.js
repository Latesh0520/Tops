import hello from './expo1.js'; 
import education,{age1 as age,city} from './expo2.js';
// If you export default function then you cant declare in {} like previous when you import.

hello('Latesh');
age1(22);
city('surat');
education('BE Computer');
