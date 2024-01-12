import { FaFacebook, FaFacebookMessenger, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <>
      <section className="container2 !mt-0 mb-6">
        <div className="title mb-8">Reach Us</div>


        <div className="flex md:flex-row flex-col gap-6 justify-between items-start">
          <div className="md:max-w-[600px] md:h-[420px] h-[300px] bg-gray-400 rounded-md overflow-hidden w-full flex-1">
            <iframe className="border-0 w-full md:h-[420px] h-[300px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7374.249638518776!2d91.9710592!3d22.4619433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fc05a3f700d%3A0x4d4660844f08fe2a!2sCUET%20Main%20Gate!5e0!3m2!1sen!2sbd!4v1704956655264!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <p className="font-medium text-xl mb-2">Contact</p>
              {
                items.map((vai, i) => (
                  <div key={i} className="flex gap-3 mb-1 items-center">
                    <FaPhoneAlt />
                    <div>
                      {vai[0]} (<a href={`tel:${vai[1]}`}>{vai[1]}</a>)
                    </div>
                  </div>
                ))
              }
            </div>

            <div>
              <p className="font-medium text-xl mb-2">Message</p>
              <div className='flex gap-4 items-center'>
                {
                  socials.map((social, i) => (
                    <a href={social[1]} target="blank" key={i}>
                      {social[0]}
                    </a>
                  ))
                }
              </div>
            </div>

            <div>
              <p className="font-medium text-xl mb-2">Address</p>
              <p className="fon">Chittagong University of Engineering & Technology, Pahartholi, Raozan, Chittagong District. </p>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

const socials = [
  [<FaFacebook className="text-2xl" />, 'https://www.facebook.com/profile.php?id=61555337101476'],
  [<FaFacebookMessenger className="text-2xl" />, 'https://www.facebook.com/messages/t/202387086292069'],
  [<IoIosMail className="text-3xl" />, 'mailto:iupc.cuet.codestorm@gmail.com']
]

const items = [
  ['Md. Al-Amin Bhuiyan', '01517814658'],
  ['Md. Rakib Alam Bappi', '01521797961'],
  ['Fahimul Alam Araf', '01614246654'],
  ['Md Ashraful Alam', '01625400218'],
  ['Nidita Roy', '01766456696'],
  ['Abir Hassan', '01799278764'],
]