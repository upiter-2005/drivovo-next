import { startFundCount } from "./startFundCount";

export const ownThreeYearsCount = (carObject: any) => {

  const startFund = startFundCount(carObject)



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
  let taxes: number = 0
  let osago: number = 0
  let maintenance: number = 0
  let tires: number = 0
  let aditionals: number = 0
  let service: number = 0

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

  subscriptionAvto =
 (( carObject.car_price_ex_showroom.number + ((startFund / 100) * 21) 
  - ((lastPayment)) )
  / 36).toFixed(0) as any

  taxes = 
  (parseInt(carObject.luxury_tax.number + 
    carObject.luxury_tax_2_years.number +  
    carObject.pension_fund.formula.number +  
    carObject.registration.formula.number 
) / 36).toFixed(0) as any

osago = 
(parseInt(carObject.osago.formula.number + 
  carObject.osago_2_year.formula.number + 
  carObject.insurance_1_year.formula.number + 
  carObject.insurance_2_year.formula.number  
) / 36).toFixed(0) as any

maintenance = 
(parseInt(carObject.maintenance.formula.number) / 36).toFixed(0) as any

tires = (parseInt(carObject.tire_service.formula.number + carObject.tires.number) / 36).toFixed(0) as any

aditionals = 
(parseInt(carObject.safety_net.formula.number +
  carObject.armored_film.number +
  carObject.carpets.number +
  carObject.motor_protection_month.formula.number
) / 36).toFixed(0) as any

service = ((drivovoPrice / 36) - ( ownerThreeYearsCost / 36)  - 3).toFixed(0) as any

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
    subscriptionAvto,
    taxes,
    osago,
    maintenance,
    tires,
    aditionals,
    service

  }
};