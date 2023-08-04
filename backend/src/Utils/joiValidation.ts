import Joi from "joi";

export const loginUserSchema = Joi.object().keys({
  email: Joi.string()

    .lowercase()

    .regex(/^\S+@\S+\.\S+$/)

    .required(),

  password: Joi.string().min(6).required(),
});

export const validateRegisteredUser = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string()
    .regex(/^\S+@\S+\.\S+$/)
    .required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9@]{6,30}$/)
    .required(),
  confirm_password: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("confirm_password")
    .messages({ "any.only": "{{#label}} does not match" }),
});

export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};

export const ValidateCashIncome = Joi.object().keys({
  amount: Joi.string().required(),
  narration: Joi.string().required(),
})



export const createAccountSchema = Joi.object().keys({
    bankName: Joi.string().required(),
    accountNumber: Joi.number().max(9999999999).required(),
    accountName: Joi.string().required(),
    bvn: Joi.number().max(99999999999).required(),
    identification: Joi.string().required(),
  });
  
  


