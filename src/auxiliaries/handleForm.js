export default function handleForm(e, form, setForm) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }