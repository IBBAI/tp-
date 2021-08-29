
function calcular()
{
var puntos=0;
var msg="0%";
if(document.getElementById('1C').checked)
{puntos++;}
if(document.getElementById('2D').checked)
{puntos++;}
if(document.getElementById('3A').checked)
{puntos++;}
if(document.getElementById('4B').checked)
{puntos++;}
if(document.getElementById('5B').checked)
{puntos++;}
if(document.getElementById('6A').checked)
{puntos++;}
if(document.getElementById('7A').checked)
{puntos++;}
if(document.getElementById('8B').checked)
{puntos++;}
if(document.getElementById('9A').checked)
{puntos++;}
if(document.getElementById('10B').checked)
{puntos++;}
if(document.getElementById('11A').checked)
{puntos++;}
if(document.getElementById('12A').checked)
{puntos++;}
if(document.getElementById('13B').checked)
{puntos++;}
if(document.getElementById('14B').checked)
{puntos++;}
if(document.getElementById('15B').checked)
{puntos++;}
if(document.getElementById('16A').checked)
{puntos++;}
if(document.getElementById('17A').checked)
{puntos++;}
if(document.getElementById('18B').checked)
{puntos++;}
if(document.getElementById('19B').checked)
{puntos++;}
if(document.getElementById('20A').checked)
{puntos++;}
if(document.getElementById('21B').checked)
{puntos++;}
if(document.getElementById('22B').checked)
{puntos++;}
if(document.getElementById('23B').checked)
{puntos++;}
if(document.getElementById('24B').checked)
{puntos++;}
if(puntos==1)
{msg ="4.16%";}
if(puntos==2)
{msg ="8.32%";}
if(puntos==3)
{msg ="12.48%";}
if(puntos==4)
{msg ="16.64%";}
if(puntos==5)
{msg ="20.8%";}
if(puntos==6)
{msg ="24.96%";}
if(puntos==7)
{msg ="29.12%";}
if(puntos==8)
{msg ="33.28%";}
if(puntos==9)
{msg ="37.44%";}
if(puntos==10)
{msg ="41.6%";}
if(puntos==11)
{msg ="45.76%";}
if(puntos==12)
{msg ="49.92%";}
if(puntos==13)
{msg ="54.08%";}
if(puntos==14)
{msg ="58.24%";}
if(puntos==15)
{msg ="62.4%";}
if(puntos==16)
{msg ="66.56%";}
if(puntos==17)
{msg ="70.72%";}
if(puntos==18)
{msg ="74.88%";}
if(puntos==19)
{msg ="79.04%";}
if(puntos==20)
{msg ="83.2%";}
if(puntos==21)
{msg ="87.36%";}
if(puntos==22)
{msg ="91.52%";}
if(puntos==23)
{msg ="95.68%";}
if(puntos==24)
{msg ="100%";}

alert("el porcentaje de aciertos es   :"+msg);



}
