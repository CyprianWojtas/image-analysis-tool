def run(inputs: dict, attributes: dict):
	if inputs['value'] is None:
		raise RuntimeError('No input')

	return { 'value_out': inputs['value'] }, {'value': inputs['value'] }
