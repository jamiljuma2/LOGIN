import Badge from '../../components/Badge'
import ProgressBar from '../../components/ProgressBar'

export default function RatingBadge() {
  const rating = 4.6
  const completed = 128
  const badge = 'Gold'
  const progressToNext = 72
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Rating & Badge</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-4">
          <div className="text-sm text-gray-600">Current Badge</div>
          <div className="mt-2"><Badge label={badge} /></div>
        </div>
        <div className="card p-4">
          <div className="text-sm text-gray-600">Rating Score</div>
          <div className="mt-2 text-2xl font-semibold">{rating}</div>
        </div>
        <div className="card p-4">
          <div className="text-sm text-gray-600">Completed Jobs</div>
          <div className="mt-2 text-2xl font-semibold">{completed}</div>
        </div>
      </div>
      <div className="card p-4">
        <div className="text-sm text-gray-600">Progress to next badge</div>
        <div className="mt-2"><ProgressBar value={progressToNext} /></div>
      </div>
    </div>
  )
}
