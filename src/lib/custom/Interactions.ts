/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
// As per https://eslint.org/docs/rules/no-alert

export const customAlert = (text: string) => {
    alert(text);
};

export const customPrompt = (text: string, value: string) => {
    return prompt(text, value || "");
};

export const customConfirm = (text: string) => {
    return confirm(text);
};
