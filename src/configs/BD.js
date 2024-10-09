import 'dotenv/config'

export const BDconfig={
    host:process.env.BD_HOST ?? '',
    port:process.env.BD_PORT ?? 6543,
    database:process.env.DATABASE ?? '',
    user:process.env.USER ?? '',
    password:process.env.PASSWORD ?? "",
}