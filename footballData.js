export async function fetchTeamMatches(teamId, competition, token) {
  const res = await fetch(`https://api.football-data.org/v4/teams/${teamId}/matches?competitions=${competition}`, {
    headers: { "X-Auth-Token": token },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch matches");
  return res.json();
}

export async function fetchCompetitionStandings(competition, token) {
  const res = await fetch(`https://api.football-data.org/v4/competitions/${competition}/standings`, {
    headers: { "X-Auth-Token": token },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch standings");
  return res.json();
}

export async function fetchTeamSquad(teamId, token) {
  const res = await fetch(`https://api.football-data.org/v4/teams/${teamId}`, {
    headers: { "X-Auth-Token": token },
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error("Failed to fetch squad");
  return res.json();
}