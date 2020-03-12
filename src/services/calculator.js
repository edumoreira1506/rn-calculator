const operators = {
  SUM: '+',
  DIVIDE: '/',
  LINUS: '-',
  MULTIPLY: '*',
  REST: '%'
}

export const setup = () => ({
  values: [ ],
  operators: [ ]
});

const isValidOperator = operator => Object.keys(operators).some(operatorKey => operators[operatorKey] === operator);

const canAddOperator = ({ values, operators }) => values.length === operators.length + 1;

export const validateOperator = (operator, values, callback) => {
  if (!isValidOperator(operator)) return callback.onError('Invalid operator!');
  if (!canAddOperator(values)) return callback.onError('You need to insert numbers to add operators!');

  const newValues = addOperator(values, operator);

  return callback.onSuccess(newValues);
}

const addOperator = (values, operator) => ({
  ...values,
  operators: [ ...values.operators,  operator]
});

const addNumber = (values, number) => ({
  ...values,
  values: [ ...values.values,  number ]
})

export const validateNumber = (number, values, callback) => {
  if (isNaN(number)) return callback.onError('Invalid number!');

  if (canAddOperator(values)) {
    const newValues = concatLastNumber(values, number);

    return callback.onSuccess(newValues);
  }

  const newValues = addNumber(values, number);

  return callback.onSuccess(newValues);
}

const canAddFloat = canAddOperator;

export const validateFloat = (values, callback) => {
  if (!canAddFloat(values)) return callback.onError('You can not add a float number now!');

  const concatedNumber = concatLastNumber(values, '.');

  return {
    ...values,
    values: [ values.values, Number(concatedNumber) ]
  }
}

const concatLastNumber = (values, number) => {
  const lastNumber = values.values.pop();
  const concatedNumber = `${lastNumber}${number}`;

  return {
    ...values,
    values: [ ...values.values, Number(concatedNumber) ]
  };
}

export const getOperation = ({ values, operators }) => values.reduce((display, value, index) =>
  `${display} ${value} ${operators[index] || ''} `,
'');

export const getResult = values => eval(getOperation(values));
