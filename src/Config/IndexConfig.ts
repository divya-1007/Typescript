export let VENDOR_API = {
    RE_TRANSMIT:'',
    GET_CURRENT_BALANCE:'100',
    PROCESS_REQUEST:'',
    METER_PRE_CHECK:''
}

export let JWT_SECRETS = {
    JWT_SECRET:'MeterApplication@2018',
    JWT_EXPIRED_TIME : 60 * 24, // 1 day
}
export let  DATAREQ = {
    DB_URI:"mongodb://localhost:27017/DemoData",
    JWT_SECRET:'MeterApplication@2018',
    JWT_EXPIRED_TIME : 60 * 24, // 1 day
    VENDOR_API:""
}