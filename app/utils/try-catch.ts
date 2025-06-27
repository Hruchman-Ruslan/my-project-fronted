import { handleError } from './handle-error'

export async function tryCatch<T>(fn: () => Promise<T>) {
	try {
		return await fn()
	} catch (err) {
		return handleError(err)
	}
}
