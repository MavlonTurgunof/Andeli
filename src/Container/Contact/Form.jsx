function Form({ handleSubmit, form, setForm, loading }) {
  return (
    <>
      <form onSubmit={handleSubmit} className="flex-1 md:p-[50px] p-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[39px]">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-[16px] font-medium text-[#8D8D8D] mb-2"
            >
              Имя
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              required
              className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-[16px] font-medium text-[#8D8D8D] mb-2"
            >
              Фамилия
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              required
              className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[16px] font-medium text-[#8D8D8D] mb-2"
            >
              Электронная почта
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="text-[16px] font-medium text-[#8D8D8D] mb-2"
            >
              Номер телефона
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, phoneNumber: e.target.value })
              }
              required
              className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="message"
              className="text-[16px] font-medium text-[#8D8D8D] mb-2"
            >
              Сообщение
            </label>
            <input
              type="text"
              name="message"
              placeholder="Напишите свое сообщение..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="border-b-1 border-[#8D8D8D] focus:border-blue-400 focus:border-b-2 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="md:float-end w-fit px-[48px] py-[15px] bg-black text-white mt-[45px] rounded-[15px]"
          disabled={loading}
        >
          {loading ? "Отправка..." : "Отправить сообщение"}
        </button>
      </form>
    </>
  );
}

export default Form;
