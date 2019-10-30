const getSleepHours = day => {
  switch(day) {
    case 'Monday':
      return 8
      break;
    case 'Tuesday':
      return 7
      break;
    case 'Wednesday':
      return 8
      break;
    case 'Thursday':
      return 6
      break;
    case 'Friday':
      return 7
      break;
    case 'Saturday':
      return 8
      break;
    case 'Sunday':
      return 7
      break;
    default:
      return 'Error!'
  }
};

const getActualSleepHours = () => 
    getSleepHours ('Monday') + 
    getSleepHours ('Tuesday') + 
    getSleepHours ('Wednesday') + 
    getSleepHours ('Thursday') +
    getSleepHours ('Friday') + 
    getSleepHours ('Saturday') + 
    getSleepHours ('Sunday');

console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours more sleep than you needed!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You need ' + (idealSleepHours - actualSleepHours) + ' hours more sleep, init blud');
  }
};

calculateSleepDebt();
