import {Service} from "../store/dto"


export default function getHardware(service: Service): string {
  const {cpu, memory} = service

  return `${cpu} vCPU + ${memory} Gb RAM`
}
