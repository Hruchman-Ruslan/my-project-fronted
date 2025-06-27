export function handleError(
	error: unknown,
	fallbackMessage = 'Something went wrong.'
) {
	if (error instanceof Error && error.message) {
		return { error: error.message }
	}
	return { error: fallbackMessage }
}
