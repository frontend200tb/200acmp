import t1    from '../../el-acmp/el-acmp1.html';
import t2    from '../../el-acmp/el-acmp2.html';
import t3    from '../../el-acmp/el-acmp3.html';

export default function inElem() {

  if (document.querySelector('.t1')) {
    document.querySelector('.t1').innerHTML = t1;
  }
  if (document.querySelector('.t2')) {
    document.querySelector('.t2').innerHTML = t2;
  }
  if (document.querySelector('.t3')) {
    document.querySelector('.t3').innerHTML = t3;
  }

}
