"use client";
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {}
interface IInputs {
	name: string;
	email: string;
	subject: string;
	message: string;
}

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<IInputs>();

	const onSubmit: SubmitHandler<IInputs> = (formData) => {
		window.location.href = `mailto:ys1113457623@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
	};
    return (
		<div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>
			<div className="flex flex-col space-y-10">
				<h4 className="text-4xl font-semibold text-center">
					I have got just what you need.{" "}
					<span className="decoration-[#f7ab0a]/50 underline">Lets Talk.</span>
				</h4>
				<div className="space-y-10">
					<div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-[#f7ab0a] h-7	w-7	animate-pulse" />
						<p className="text-2xl">+91 8595890193</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-[#f7ab0a] h-7	w-7	animate-pulse" />
						<p className="text-2xl">ys1113457623@gmail.com</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-[#f7ab0a] h-7	w-7	animate-pulse" />
						<p className="text-2xl">Bennett University, Greater Noida</p>
					</div>
				</div>
				<form
					className="flex flex-col space-y-2 w-fit mx-auto"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex space-x-2">
						<input
							className="contactInput"
							type="text"
							{...register("name")}
							placeholder="Name"
						/>
						<input
							className="contactInput"
							type="text"
							{...register("email")}
							placeholder="Email"
						/>
					</div>
					<input
						className="contactInput"
						type="text"
						{...register("subject")}
						placeholder="Subject"
					/>
					<textarea
						className="contactInput"
						{...register("message")}
						placeholder="Message"
					/>
					<button
						className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactMe