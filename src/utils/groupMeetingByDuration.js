export const groupMeetingsByDuration = (meetings) => {
  const batches = {};
  meetings.forEach((meeting) => {
    const start = new Date(meeting.start_time);
    const end = new Date(meeting.end_time);
    const duration = (end - start) / (1000 * 60);
    if (!batches[duration]) {
      batches[duration] = [];
    }
    batches[duration].push(meeting);
  });
  return batches;
};
