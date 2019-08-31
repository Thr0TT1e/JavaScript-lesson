let money = prompt('Ваш бюджет на месяц?', ''),
  time = prompt("Введите дату в формате YYYY-MM-DD", ''),
  appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
  },
  kredit1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
  answer1 = prompt('Во сколько обойдется?', ''),
  kredit2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
  answer2 = prompt('Во сколько обойдется?', '');

appDate.expenses.kredit1 = answer1;
appDate.expenses.kredit2 = answer2;

alert(appDate.budget / 30);