const cars = [
    {
        vin: '1FMCU0GX1EUC05360',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '2FMDK39C98BA33451',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '2A4GP54L77R151293',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}