import { ListTopUp } from '@/components/organisms/ListTopUp'
export const TopUpTemplate = () => {
  return (
    <>
      <div>
        <div>
          <h2 className="border-l-8 border-l-orange-600 px-2 text-3xl font-bold uppercase leading-normal">
            Top up automatically 24/24
          </h2>
          <p className="mt-1 text-base leading-normal">
            Recharge ATM 100% automatically, add money to shop account after 5 -
            30 seconds
          </p>
        </div>
        <ListTopUp />
      </div>
    </>
  )
}
