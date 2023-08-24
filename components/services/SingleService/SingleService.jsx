import SingleServiceTwo from '../SingleServiceTwo/SingleServiceTwo'

export default function SingleService({ project_descriptions }) {
  return (
    <>
      {project_descriptions?.map((projectService, index) => (
        <SingleServiceTwo
          key={index}
          projectService={projectService}
          index={index}
        />
      ))}
    </>
  )
}
