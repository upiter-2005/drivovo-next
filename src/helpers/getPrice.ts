export const getPrice = (car: any) => {
  const startFund = (
    parseInt(car.properties.car_price_ex_showroom.number) +
    parseFloat(car.properties.pension_fund.formula.number.toFixed(0)) +
    parseFloat(car.properties.insurance_1_year.formula.number) +
    parseFloat(car.properties.registration.formula.number) +
    parseFloat(car.properties.luxury_tax.number) +
    parseFloat(car.properties.tinted_glass.formula.number) +
    parseFloat(car.properties.tires.number) +
    parseFloat(car.properties.carpets.number) +
    parseFloat(car.properties.safety_net.formula.number) +
    parseFloat(car.properties.radiator_protection.number) +
    parseFloat(car.properties.armored_film.number)
  )

  const result = (
    startFund +
    parseFloat(((startFund / 100) * 21).toFixed(2)) +
    parseFloat(car.properties.tire_service.formula.number) +
    parseFloat(car.properties.luxury_tax_2_years.number) +
    parseFloat(car.properties.osago_2_year.formula.number) +
    parseFloat(car.properties.maintenance.formula.number) +
    parseFloat(car.properties.insurance_2_year.formula.number)
  );

  const dop = parseInt(car.properties.car_price_ex_showroom.number) +
            parseFloat(car.properties.carpets.number) +
            parseFloat(car.properties.armored_film.number);
  const persent = parseFloat(car.properties.residual_value?.number);
  const maxPrice = (result) + (result * 0.13);
  const last40 = dop * persent;
  return ((maxPrice - last40) / 36).toFixed(0);
}