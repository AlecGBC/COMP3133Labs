// Exercise 4

guessAngle = (angle) => {

    if(angle < 90)
    {
        return "Acute Angle"
    }
    else if(angle == 90)
    {
        return "Right Angle"
    }
    else if(angle < 180)
    {
        return "Obtuse Angle"
    }
    else
    {
        return "Straight Angle"
    }
  }
  
  console.log(guessAngle(47))
  console.log(guessAngle(90))
  console.log(guessAngle(145))
  console.log(guessAngle(180))