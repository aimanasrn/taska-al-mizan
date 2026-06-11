import { useMemo, useState } from 'react';
import { useLanguage } from '../../app/providers/useLanguage';
import { contactPageContent } from '../../content/contact';

type FormState = {
  parentName: string;
  phoneNumber: string;
  childAge: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  parentName: '',
  phoneNumber: '',
  childAge: '',
  message: '',
};

export function ContactForm() {
  const { language } = useLanguage();
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const fields = useMemo(
    () => [
      {
        name: 'parentName' as const,
        label: contactPageContent.labels.parentName[language],
        placeholder: contactPageContent.placeholders.parentName[language],
      },
      {
        name: 'phoneNumber' as const,
        label: contactPageContent.labels.phoneNumber[language],
        placeholder: contactPageContent.placeholders.phoneNumber[language],
      },
      {
        name: 'childAge' as const,
        label: contactPageContent.labels.childAge[language],
        placeholder: contactPageContent.placeholders.childAge[language],
      },
    ],
    [language],
  );

  function validate(values: FormState) {
    const nextErrors: FormErrors = {};

    if (!values.parentName.trim()) {
      nextErrors.parentName = contactPageContent.errors.parentName[language];
    }
    if (!values.phoneNumber.trim()) {
      nextErrors.phoneNumber = contactPageContent.errors.phoneNumber[language];
    }
    if (!values.childAge.trim()) {
      nextErrors.childAge = contactPageContent.errors.childAge[language];
    }
    if (!values.message.trim()) {
      nextErrors.message = contactPageContent.errors.message[language];
    }

    return nextErrors;
  }

  function handleChange(name: keyof FormState, value: string) {
    setFormState((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(formState);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <form
      className="rounded-[32px] bg-white p-6 shadow-soft md:p-9"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="flex flex-col gap-2 text-sm font-bold text-brand-ink">
            {field.label}
            <input
              className="rounded-2xl border border-brand-teal/20 bg-brand-cream px-4 py-3 text-sm font-semibold outline-none transition focus:border-brand-teal"
              name={field.name}
              onChange={(event) => handleChange(field.name, event.target.value)}
              placeholder={field.placeholder}
              value={formState[field.name]}
            />
            {errors[field.name] ? (
              <span className="text-xs font-bold text-rose-500">{errors[field.name]}</span>
            ) : null}
          </label>
        ))}
      </div>

      <label className="mt-5 flex flex-col gap-2 text-sm font-bold text-brand-ink">
        {contactPageContent.labels.message[language]}
        <textarea
          className="min-h-36 rounded-2xl border border-brand-teal/20 bg-brand-cream px-4 py-3 text-sm font-semibold outline-none transition focus:border-brand-teal"
          name="message"
          onChange={(event) => handleChange('message', event.target.value)}
          placeholder={contactPageContent.placeholders.message[language]}
          value={formState.message}
        />
        {errors.message ? (
          <span className="text-xs font-bold text-rose-500">{errors.message}</span>
        ) : null}
      </label>

      <button
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-float sm:w-auto"
        type="submit"
      >
        {contactPageContent.submitLabel[language]}
      </button>

      {submitted ? (
        <p className="mt-4 text-sm font-bold text-emerald-600">
          {contactPageContent.successNote[language]}
        </p>
      ) : null}
    </form>
  );
}
