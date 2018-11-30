class DateHelper extends Date {
    constructor() {
        super()
    }
    async Format(format='yyyy-MM-dd hh:mm:ss', time = false) {
        const items = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
        }
        for (const item in items) {
            if (new RegExp(`(${item})`).test(format)) {
                format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (items[item]) : (("00" + items[item]).substr(("" + items[item]).length)))
            }
        }

        return format
    }
    async time() {
        return Math.floor(Date.now() / 1000)
    }

    async friendly(time) {
        const now = await this.time()
        if (!time) {
            time = now - 1
        }
        const left = now - time
        if (left < 60) {
            return `${left}秒前` 
        } else if (left < 3600) {
            return `${Math.floor(left/60)}分钟前`
        } else if (left < 86400) {
            return `${Math.floor(left / 3600)}小时前`
        } else if (left < 604800) {
            const day = Math.floor(left / 86400)
            if (day < 2) {
                return '昨天'
            } else {
                return `${day}天前`
            }
        } else {
            const day = Math.floor(left / 86400)
            return `${day}天前`
        }
    }

    /**
     * 字符传转时间戳
     *
     * @param {*} str
     * @returns
     * @memberof DateHelper
     */
    async strtotime(str) {
        return Date.parse(str)
    }

    /**
     * 兼容1.0.x
     * @param {*} format 
     * @param {*} time 
     */
    async date_format(format, time = false) {
        if (!format) {
            format = 'yyyy-MM-dd hh:mm:ss'
        }
        if (time) {
            return await this.Format(format, time)
        } else {
            return await this.Format(format)
        }
    }
}

module.exports = new DateHelper()