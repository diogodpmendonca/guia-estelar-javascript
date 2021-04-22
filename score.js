function getScore(score){
    let scoreFinal
  
    if(score >= 90 && score <= 100){
        scoreFinal = 'A'
    }else if(score >= 80 && score <= 89){
      scoreFinal = 'B'
    }else if(score >= 70 && score <= 79){
      scoreFinal = 'C'
    }else if(score >= 60 && score <= 69){
      scoreFinal = 'D'
    }else if(score < 60 && score >= 0){
      scoreFinal = 'F'
    }else{
      scoreFinal = 'Nota Inválida'
    }
    return scoreFinal
  }

  console.log(getScore(-1))