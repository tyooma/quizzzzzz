export const createControl = (config, validation) => {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: ''
  }
}

export const validate = (value, validation = null) => {
  if (!validation) {
    return true
  }

  let isValid = true

  if (validation.required) {
    isValid = value.trim() !== '' && isValid
  }

  return isValid
}

export const validateForm = formsControls => {
  let isFormValid = true

  for (let control in formsControls) {
    if (formsControls.hasOwnProperty(control)) {
      isFormValid = formsControls[control].valid && isFormValid
    }
  }

  return isFormValid
}
