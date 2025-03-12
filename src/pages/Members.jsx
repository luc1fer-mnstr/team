import { teamMembers } from '../constants'; // assuming teamMembers is in constants file
import { Link } from 'react-router-dom'; // for routing to member profile page

const MembersPage = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mb-10">
          A passionate group of individuals committed to excellence.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Link to={`/members/${member.id}`} key={member.id}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm mb-3">{member.bio}</p>
                <Link to='/portfolio' className='text-cyan-300'>View Portfolio</Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersPage;
