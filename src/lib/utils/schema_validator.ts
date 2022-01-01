import type Ajv from 'ajv';

class SchemaValidator {
	constructor(protected ajv: Ajv) {}
	public validate<T>(schema: object, data: T): T {
		const isValid = this.ajv.validate(schema, data);

		if (!isValid) {
			const errorMessages = this.ajv.errorsText();
			throw new Error(`Validation Error. ${errorMessages}`);
		}

		return data;
	}
}

export default SchemaValidator;
