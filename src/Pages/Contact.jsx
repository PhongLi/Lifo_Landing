import { useState } from 'react';
import { CheckIcon } from '~/assets/icons';
import { appUrl } from '~/common/constants';
import { TextInput, TextSelect } from '~/components/contact';
import { Button } from '~/components/shared/Button';

function Contact() {
    const [contact, setContact] = useState({ name: '', email: '', reason: '', message: '' });
    const [statusSend, setStatusSend] = useState(false);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({ ...contact, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatusSend(true);
    };
    return (
        <div className="flex flex-col items-center my-20 h-[80vh]">
            {!statusSend ? (
                <>
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold mb-12">Contact us</h2>
                    <div>
                        <form action="" className="flex flex-col items-center" onSubmit={handleSubmit}>
                            <TextInput
                                type="text"
                                placeholder="Your name*"
                                name="name"
                                value={contact.name}
                                onChange={handleChange}
                            />
                            <TextInput
                                type="text"
                                placeholder="Your email*"
                                name="email"
                                value={contact.email}
                                onChange={handleChange}
                            />
                            <TextSelect name="reason" id="reason" value={contact.reason} onChange={handleChange}>
                                <option value="Why are you contacting us?*">Why are you contacting us?*</option>
                                <option value="Support">Support</option>
                                <option value="Business">Business</option>
                                <option value="Press">Press</option>
                                <option value="Other">Other</option>
                            </TextSelect>
                            <textarea
                                name="message"
                                id="message"
                                type="text"
                                placeholder="Message"
                                rows={3}
                                value={contact.message}
                                onChange={handleChange}
                                className="w-80 md:w-[26rem] text-sm outline-none border-none p-4 rounded-[10px] shadow-s2 mb-2 placeholder:text-black"
                            />
                            <Button type="default" className="mt-20 px-8 py-[10px]">
                                Send
                            </Button>
                        </form>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center text-center mt-20">
                    <CheckIcon className="mb-12" />
                    <h2 className="font-Helvetica text-[1.75rem] md:text-[2rem] font-bold mb-12">
                        Your message has been sent.
                    </h2>
                    <p className="font-Helvetica text-base font-normal text-center mb-12">
                        Please check your spam inbox if you don’t receive a <br /> reply within 7 days.
                    </p>
                    <Button type="default" className="px-8 py-[10px]" href={appUrl}>
                        Home
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Contact;
