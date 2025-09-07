let nome = "Maguila"
let nivel = ["ferro" , "bronze" , "prata" , "ouro" , "platina" , "ascendente" , "imortal" , "radiante"]
let XP = 10500
if (XP <= 1000) {console.log ("O Herói " + nome + " está no nivel " + nivel[0])}
else if (XP >= 1001 && XP <= 2000) {console.log ("O Herói " + nome + " está no nivel " + nivel[1])}
else if (XP >= 2001 && XP <= 5000) {console.log ("O Herói " + nome + " está no nivel " + nivel[2])}
else if (XP >= 5001 && XP <= 7000) {console.log ("O Herói " + nome + " está no nivel " + nivel[3])}
else if (XP >= 7001 && XP <= 8000) {console.log ("O Herói " + nome + " está no nivel " + nivel[4])}
else if (XP >= 8001 && XP <= 9000) {console.log ("O Herói " + nome + " está no nivel " + nivel[5])}
else if (XP >= 9001 && XP <= 10000) {console.log ("O Herói " + nome + " está no nivel " + nivel[6])}
else if (XP >= 10001) {console.log ("O Herói de nome " + nome + " está no nível de " + nivel[7] + "!")}
