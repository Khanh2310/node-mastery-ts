
export const CourseTableExpand = ({
  instructorId,
}: {
  instructorId: number
}) => {
  return (
    <td className="bg-gray-200 p-5" colSpan={100}>
      {instructorId ? (
        <div>
          <div>{instructorId}</div>
        </div>
      ) : null}
    </td>
  )
}
