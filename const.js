const commands = `
/start - Перезапустить бота
/help - Помощь
/ask - Список вопросов
`

// Аренда не завершена после возврата повербанка в станцию
const btn_1Text = 'Извини за неудобства, если так произошло. Попроси сотрудника точки перегрузить станцию и убедись, что аренда завершена. Если не помогло, сообщи о проблеме в Службу поддержки Zaryadium в Telegram. Сообщи номер телефона на который зарегистрирован аккаунт и номер станции под QR кодом. Мы оперативно решим проблему и закроем аренду.'

// Не возвращен депозит
const btn_2Text = '- Возврат депозита происходит после того как возвращен повербанк и аренда была полностью оплачена. Возможно на карте не хватает средств для оплаты аренды, после оплаты аренды депозит будет полностью возвращен.\n- При соблюдении этих условий депозит обычно возвращается мгновенно, но бывает, что система загружена, и возврат может занять до 3 дней, а в исключительных случаях до 30 дней'

//QR успешно отсканирован, но повербанк не выдан
const btn_2_1Text = 'Извини за неудобства, если так произошло. Попроси сотрудника точки перегрузить станцию. Если не помогло, сообщи о проблеме в Службу поддержки Zaryadium в Telegram. Сообщи номер телефона на который зарегистрирован аккаунт и номер станции под QR кодом. Мы оперативно решим проблему и закроем аренду.'

//Тарифы и условия аренды
const btn_3Text = '- Тарифы можешь узнать в описании точки в приложении или отсканировав QR на станции.\n- Оплата за первый час списывается с карты в момент начала аренды павербанка.\n- Далее плата взымается за сутки в начале арендного периода согласно тарифам точки.\n- Убедись, что вернул павербанк и закончил аренду. Когда взял павербанк, проверь его внешний вид и состояние. За утерю и повреждение мы взымаем штраф.'

// Повербанк не заряжает
const btn_4Text = 'Извини за неудобства, если так произошло. Вытащи и вставь разъём провода повербанка повторно. Если это не помогло, то в течении 5 минут верни его бесплатно и возьми новый. Если остались вопросы, то Службу поддержки Zaryadium в Telegram'

// Потерял или повредил павербанк
const btn_5Text = 'Сообщи в Службу поддержки Zaryadium в Telegram или по телефону 8-800-101-8192'

// Сотрудничество
const btn_6Text = 'Если хочешь станцию в свою розничную точку или стать партнёром свяжись с нами Zaryadium в Telegram или partners@zaryadium.ru'

// Как скачать приложение Зарядиум
const btn_7Text = 'Чтобы скачать приложение Зарядиум наведи камеру телефона на QR код на станции или выбери <a href="https://play.google.com/store/apps/details?id=uni.UNIC7F0FDC">Android</a> или <a href="https://apps.apple.com/ru/app/%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%B8%D1%83%D0%BC/id6467823633?l=en-GB">iPhone</a>'



module.exports.commands = commands
module.exports.btn_1Text = btn_1Text
module.exports.btn_2Text = btn_2Text
module.exports.btn_2_1Text = btn_2_1Text
module.exports.btn_3Text = btn_3Text
module.exports.btn_4Text = btn_4Text
module.exports.btn_5Text = btn_5Text
module.exports.btn_6Text = btn_6Text
module.exports.btn_7Text = btn_7Text