import qs from 'qs'

type SendOptions = {
    url: string
    data?: Record<any, any>
    methods: 'GET' | 'POST' | 'UPDATE' | 'DELETE' | 'PUT'
}

class Http {
    options = {
        url: '',
        cache: 'default',
        credentials: 'same-origin',
        destination: 'audio',
    } as Request

    get<T>(url: string, query?: Record<any, any>) {
        url += qs.stringify(query)
        return this.send<T>({ url, methods: 'GET' })
    }

    post<T>(url: string, data: Record<any, any>) {
        return this.send<T>({ url, data, methods: 'POST' })
    }

    send<T>({ url, data, methods }: SendOptions) {
        return new Promise<T>(async (resolve, reject) => {
            try {
                url = this.options.url + url
                const options = { ...this.options, url, methods, data }
                const response = await fetch(options)
                const result = (await response.json()) as T
                resolve(result)
            } catch (e) {
                reject('error')
            }
        })
    }
}

export const http = new Http()
