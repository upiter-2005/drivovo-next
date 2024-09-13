import { startFundCount } from "./startFundCount";

export const ownThreeYearsCount = (carObject: any) => {

  const startFund = startFundCount(carObject)


console.log(typeof carObject.tire_service.formula.number);


  let persent: number = 0.4
  let dopCost: number = 0
  let lastPayment: number = 0
  let drivovoPrice: number = 0
  let pricePerMonth: number = 0
  let ownerThreeYearsCost: number = 0
  let costDop40: number = 0
  let costDop50: number = 0
  let garantyStandart: number = 0
  let garanty: number = 0
  let pricePerMonthStandart: number = 0
  let pricePerMonth40: number = 0
  let subscriptionAvto: number = 0

  if(carObject.residual_value?.number !== 0){
    persent = carObject.residual_value.number
  }

  let result: number = (
    startFund +
    ((startFund / 100) * 21) +
      carObject.tire_service.formula.number +
      carObject.luxury_tax_2_years.number +
      carObject.osago_2_year.formula.number +
      carObject.maintenance.formula.number +
      carObject.insurance_2_year.formula.number
    );

  let dop: number = (
    carObject.car_price_ex_showroom.number +
    carObject.carpets.number +
    carObject.armored_film.number
  ).toFixed(2);

  const last: number = dop * persent

  const maxPrice: any = result + (result * 0.13)

  const perMonth: any = (maxPrice - last) / 36

  dopCost = dop // вартість з доп
  lastPayment = last // останній платіж
  drivovoPrice = maxPrice// ватість з викупом
  pricePerMonth = perMonth //місячна підписка
  ownerThreeYearsCost = result

  const last40: any = dop * persent;
  costDop40 = last40

  const last50: any = dop * persent
  costDop50 = last50


  
  if (carObject.car_price_ex_showroom.number > 50000) {
    const garanty1 = (maxPrice - last40) / (36 + 8);
    garantyStandart = garanty1 * 8

    const garanty2 = (maxPrice - last50) / 36;
    garanty = garanty2 * 6

    pricePerMonthStandart = ((maxPrice - last40) / 36).toFixed(0) as any
    pricePerMonth40 = ((maxPrice - last40) / (36 + 8))
  } else {
    const garanty1 = (maxPrice - last40) / (36 + 6)
    garantyStandart = garanty1 * 6

    const garanty2 = (maxPrice - last50) / 36;
    garanty = garanty2 * 5

    pricePerMonthStandart = ((maxPrice - last40) / 36).toFixed(0) as any
    pricePerMonth40 = ((maxPrice - last40) / (36 + 8))
  }

  subscriptionAvto = (carObject.car_price_ex_showroom.number + ((startFund / 100) * 21)) - ((lastPayment) / 36)

  return {
    startFund,
    persent,
    dopCost,
    lastPayment,
    drivovoPrice,
    pricePerMonth,
    ownerThreeYearsCost,
    costDop40,
    costDop50,
    garantyStandart,
    garanty,
    pricePerMonthStandart,
    pricePerMonth40,
    subscriptionAvto

  }
};