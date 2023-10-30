import { Component } from 'react'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineCode } from 'react-icons/hi'
import { SiAdobeindesign } from 'react-icons/si'
import { FiVideo } from 'react-icons/fi'
import { PiNotebookBold } from 'react-icons/pi'
import { FaBlogger } from 'react-icons/fa'
import ServicesContent from './ServicesContent'
import './service.css'

const iconsDetails = [
  { name: 'Content Marketing', icon: BsPencil, size: 60 },
  { name: 'Email Marketing', icon: AiOutlineMail, size: 60 },
  { name: 'Web Design', icon: HiOutlineCode, size: 60 },
  { name: 'Adobe Design', icon: SiAdobeindesign, size: 60 },
  { name: 'Video Editing', icon: FiVideo, size: 60 },
  { name: 'Blogger', icon: FaBlogger, size: 60 },
  { name: 'Ebook Writing', icon: PiNotebookBold, size: 60 },
]
class Services extends Component {
  render() {
    return (
      <div className="service-section">
        <h1 className="heading">Services</h1>
        <p className="description">
          These are some of the services I offer. Reach out to me if I can help
          you with any!
        </p>
        <div className="service-icons">
          {iconsDetails.map((item) => (
            <ServicesContent
              Icon={item.icon}
              Title={item.name}
              Size={item.size}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Services
