import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthProvider';
import Title from '../components/Title';
import Notfound from './NotFound';
import { list } from '../utils/inquiryService';

const InquiryCard = styled.article`
  padding: 20px;
  margin: 5px;
  border: 0.1rem solid lightgrey;
`;

const Inquiries = () => {
  const [inquiries, setInquiries] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isAdmin } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await list();
      if (!data.success) {
        setError(error.message);
      } else {
        setInquiries(data.data);
        setError(null);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return isAdmin ? (
    <>
      <Title title="Henvendelser" />
      <section className="pageContent">
        {loading && <div>Loading ... </div>}
        {inquiries &&
          inquiries.map((inquiry) => (
            <InquiryCard>
              <h5>
                {' '}
                {inquiry.name} &lt;{inquiry.email}&gt;{' '}
              </h5>
              <p> {inquiry.email} </p>
            </InquiryCard>
          ))}
      </section>
    </>
  ) : (
    <Notfound />
  );
};

export default Inquiries;
