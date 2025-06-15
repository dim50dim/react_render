import { useState } from "react"

export default function Form () {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'brother@proton.me'
    })
}