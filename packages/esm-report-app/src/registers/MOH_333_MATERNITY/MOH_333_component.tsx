import React, { Fragment } from 'react';
import styles from './MOH_333.scss';
import { TableContainer, TableHead, TableRow, TableHeader, Table, TableBody, TableCell } from '@carbon/react';

const MOH333: React.FC<{ reportData: any }> = ({ reportData }) => {
  return (
    <>
      <TableContainer className={styles['title']}>
        <h1>MOH 333 MATERNITY REGISTER</h1>
      </TableContainer>
      <Table className={styles['table']}>
        <TableHead>
          <TableRow>
            <TableHeader rowSpan={6}>
              Date of <br /> Admission <br /> (dd/mm/yyyy)
            </TableHeader>
            <TableHeader>
              Admission <br /> number
            </TableHeader>
            <TableHeader rowSpan={6}>
              Fullname <br /> (First, Middle, surname)
            </TableHeader>
            <TableHeader>
              Date of Birth <br /> (dd/mm/yy)
            </TableHeader>
            <TableHeader rowSpan={6}>
              County/ <br /> Subcounty
            </TableHeader>
            <TableHeader>
              Estate/ <br /> Land mark
            </TableHeader>
            <TableHeader rowSpan={6}>
              Marital Status <br /> 1 = Married <br /> 2 = Widowed <br /> 3 = Single <br /> 4 = Divorced <br /> 5 =
              Separated
            </TableHeader>
            <TableHeader rowSpan={6}>
              Parity <br /> (X+Y)
            </TableHeader>
            <TableHeader rowSpan={6}>Gravidae</TableHeader>
            <TableHeader rowSpan={6}>
              No. of <br /> ANC <br /> visits
            </TableHeader>
            <TableHeader rowSpan={6}>
              Date of Last <br /> Menstrual <br /> Period (LMP) <br /> (dd,mm,yy)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Estimated Date <br /> of Delivery <br /> (dd,mm,yy)
            </TableHeader>
            <TableHeader rowSpan={6}>Diagnosis</TableHeader>
            <TableHeader rowSpan={6}>
              Duration of <br /> labour <br /> (hours)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Date of <br /> Delivery <br /> (dd,mm,yy)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Time of <br /> Delivery
            </TableHeader>
            <TableHeader rowSpan={6}>
              Gestation <br /> at Birth <b /> (wks)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Mode of <br /> Delivery <br /> 1)SVD <br /> 2)CS <br /> 3)Breech <br /> 4)AVD
            </TableHeader>
            <TableHeader rowSpan={6}>
              No.of babies <br /> delivered
            </TableHeader>
            <TableHeader rowSpan={6}>
              Placenta <br /> Complete <br /> 1=Yes <br /> 2=No <br /> 3=BBA
            </TableHeader>
            <TableHeader rowSpan={6}>
              Uterotonic <br /> given <br /> 1=oxytocin <br /> 2=Carbetocin <br /> 3=OTableHeaderers <br /> Specify{' '}
              <br /> 4=None
            </TableHeader>
            <TableHeader rowSpan={6}>
              Vaginal <br /> Examination
              <br /> 1=Normal <br /> 2=Episiotomy <br /> 3=Viginal tear <br /> 4=FGM <br /> 5=Viginal warts
            </TableHeader>
            <TableHeader rowSpan={6}>
              Blood <br /> loss <br /> (mis)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Mother's <br /> status after <br /> Delivery <br /> (Alive/ <br /> Dead)
            </TableHeader>
            <TableHeader>
              Notified <br /> (Y/N/NA)
            </TableHeader>
            <TableHeader colSpan={1}></TableHeader>
            <TableHeader colSpan={9}>Baby</TableHeader>
            <TableHeader>
              VDRL/ <br /> RPR <br /> Results <br /> (Specify <br /> 1=VDRL <br /> 2=RPR <br />
              3=Duo <br /> testing)
            </TableHeader>
            <TableHeader colSpan={4}></TableHeader>
            <TableHeader>
              Maternal <br /> HAART
            </TableHeader>
            <TableHeader>
              Infant <br /> Prophylaxis
            </TableHeader>
            <TableHeader>
              Partner <br /> Tested for <br /> HIV
            </TableHeader>
            <TableHeader rowSpan={6}>
              Counselled <br /> on infant <br /> feeding <br /> (Y/N/NA)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Delivery <br /> conducted by <br /> (Enter name)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Birth <br /> Notification <br /> Number
            </TableHeader>
            <TableHeader colSpan={2}>Discharge</TableHeader>
            <TableHeader colSpan={3}>Referral</TableHeader>
            <TableHeader rowSpan={6}>Comments</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader rowSpan={6}>NUPI</TableHeader>
            <TableHeader rowSpan={6}>Age</TableHeader>
            <TableHeader rowSpan={6}>Phone number</TableHeader>
            <TableHeader rowSpan={6}>
              Date Death
              <br />
              notified
            </TableHeader>
            <TableHeader rowSpan={6}>
              Delivery <br /> Complications <br /> 1=A.P.H.(Ante Partum <br /> Haemorrhage); <br />
              2=P.P.H( Post Patum <br /> Haemorrhage); <br />
              3=Eclampsia; <br />
              4=Ruptured Uterus; <br />
              5=Obstructed labour; <br />
              6=Sepsis <br /> 7=NA
            </TableHeader>
            <TableHeader rowSpan={6}>
              APGAR
              <br />
              Score
            </TableHeader>
            <TableHeader rowSpan={6}>
              Birth
              <br />
              Outcome
              <br />
              (LB/FSB/MSB)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Birth
              <br />
              Weight
              <br />
              (grams)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Sex
              <br />
              (M/F)
            </TableHeader>
            <TableHeader>
              Initiated on
              <br />
              BF in
              <br />
              1Hr
              <br />
              (Y/N)
            </TableHeader>
            <TableHeader rowSpan={6}>
              TEO
              <br />
              given at
              <br />
              birth?
              <br />
              (Y/N)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Chlorhexidine
              <br />
              applied on
              <br />
              cord stump
              <br />
              (Y/N)
            </TableHeader>
            <TableHeader>
              Birth with
              <br />
              deformity
              <br />
              (Y/N)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Given
              <br />
              Vitamin
              <br />K<br />
              (Y/N)
            </TableHeader>
            <TableHeader rowSpan={6}>(P/N/ND)</TableHeader>
            <TableHeader>HIV Test 1</TableHeader>
            <TableHeader>HIV Test 2</TableHeader>
            <TableHeader>HIV Test 3</TableHeader>
            <TableHeader>
              HIV Result
              <br />
              Maternity
              <br />
              (N/P/Inc/U/NA)
            </TableHeader>
            <TableHeader>
              Start at
              <br />
              Maternity
            </TableHeader>
            <TableHeader rowSpan={6}>(Y/N/NA)</TableHeader>
            <TableHeader rowSpan={6}>(Y/N/NA)</TableHeader>
            <TableHeader rowSpan={6}>
              Date
              <br />
              (dd,mm,yy)
            </TableHeader>
            <TableHeader rowSpan={6}>
              Status of
              <br />
              Baby
              <br />
              A=Alive
              <br />
              D=Dead
            </TableHeader>
            <TableHeader>From</TableHeader>
            <TableHeader>To</TableHeader>
            <TableHeader rowSpan={6}>Reason for referral</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader rowSpan={6}>
              Kangaroo
              <br />
              Mother
              <br />
              Care
              <br />
              (Y/N)
            </TableHeader>
            <TableHeader rowSpan={6}>
              1.Conjenital
              <br />
              syphilis
              <br />
              2. Spina bifida
              <br />
              3. Hydrocephalus
              <br />
              4. Talipes
            </TableHeader>
            <TableHeader>Kit Name:</TableHeader>
            <TableHeader>Kit Name:</TableHeader>
            <TableHeader>Kit Name:</TableHeader>
            <TableHeader rowSpan={6}>
              Initial/Retest
              <br />
              NA
            </TableHeader>
            <TableHeader rowSpan={6}>(Y/N/NA)</TableHeader>
            <TableHeader rowSpan={6}>
              1=From community
              <br />
              Unit,
              <br />
              2=From Another
              <br />
              Health Facility,
              <br />
              3=Not Applicable
            </TableHeader>
            <TableHeader rowSpan={6}>
              1=To Community
              <br />
              Unit,
              <br />
              2=Referral to HIV
              <br />
              preventive services,
              <br />
              3=Another Health
              <br />
              Facility
              <br />
              4=Not Applicable
            </TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader>Lot No:</TableHeader>
            <TableHeader>Lot No:</TableHeader>
            <TableHeader>Lot No:</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader>Expiry</TableHeader>
            <TableHeader>Expiry</TableHeader>
            <TableHeader>Expiry</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader rowSpan={6}>(N/P/1/NA)</TableHeader>
            <TableHeader rowSpan={6}>(N/P/1/NA)</TableHeader>
            <TableHeader rowSpan={6}>(N/P/1/NA)</TableHeader>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell>(a)</TableCell>
          <TableCell>(b)</TableCell>
          <TableCell>(c)</TableCell>
          <TableCell>(d)</TableCell>
          <TableCell>(e)</TableCell>
          <TableCell>(f)</TableCell>
          <TableCell>(g)</TableCell>
          <TableCell>(h)</TableCell>
          <TableCell>(i)</TableCell>
          <TableCell>(j)</TableCell>
          <TableCell>(k)</TableCell>
          <TableCell>(l)</TableCell>
          <TableCell>(m)</TableCell>
          <TableCell>(n)</TableCell>
          <TableCell>(o)</TableCell>
          <TableCell>(p)</TableCell>
          <TableCell>(q)</TableCell>
          <TableCell>(r)</TableCell>
          <TableCell>(s)</TableCell>
          <TableCell>(t)</TableCell>
          <TableCell>(u)</TableCell>
          <TableCell>(v)</TableCell>
          <TableCell>(w)</TableCell>
          <TableCell>(x)</TableCell>
          <TableCell>(y)</TableCell>
          <TableCell>(z)</TableCell>
          <TableCell>(aa)</TableCell>
          <TableCell>(ab)</TableCell>
          <TableCell>(ac)</TableCell>
          <TableCell>(ad)</TableCell>
          <TableCell>(ae)</TableCell>
          <TableCell>(af)</TableCell>
          <TableCell>(ag)</TableCell>
          <TableCell>(ah)</TableCell>
          <TableCell>(ai)</TableCell>
          <TableCell>(aj)</TableCell>
          <TableCell colSpan={3}>(ak)</TableCell>
          <TableCell>(al)</TableCell>
          <TableCell>(am)</TableCell>
          <TableCell>(an)</TableCell>
          <TableCell>(ao)</TableCell>
          <TableCell>(ap)</TableCell>
          <TableCell>(aq)</TableCell>
          <TableCell>(ar)</TableCell>
          <TableCell>(as)</TableCell>
          <TableCell>(at)</TableCell>
          <TableCell>(au)</TableCell>
          <TableCell>(av)</TableCell>
          <TableCell>(aw)</TableCell>
          <TableCell>(ax)</TableCell>
        </TableRow>
        <TableBody>
          {reportData && reportData.length > 0 ? (
            reportData.map((item, i) => (
              <React.Fragment key={i}>
                <TableRow>
                  <TableCell rowSpan={2}>{item.date_of_admission}</TableCell>
                  <TableCell rowSpan={1}>{item.date_of_admission}</TableCell>
                  <TableCell rowSpan={2}>{item.full_names}</TableCell>
                  <TableCell rowSpan={1}>{item.date_of_birth}</TableCell>
                  <TableCell rowSpan={2}>
                    {item.county}/<br />
                    {item.sub_county}
                  </TableCell>
                  <TableCell rowSpan={1}>
                    {item.village}/<br />
                    {item.estate}/<br />
                    {item.landmark}
                  </TableCell>
                  <TableCell rowSpan={2}>{item.marital_status}</TableCell>
                  <TableCell rowSpan={2}>{item.parity}</TableCell>
                  <TableCell rowSpan={2}>{item.gravidae}</TableCell>
                  <TableCell rowSpan={2}>{item.number_of_anc_visits}</TableCell>
                  <TableCell rowSpan={2}>{item.date_of_last_menstrual_period}</TableCell>
                  <TableCell rowSpan={2}>{item.expected_date_of_delivery}</TableCell>
                  <TableCell rowSpan={2}>{item.diagnosis}</TableCell>
                  <TableCell rowSpan={2}>{item.duration_of_labour}</TableCell>
                  <TableCell rowSpan={2}>{item.date_of_birth}</TableCell>
                  <TableCell rowSpan={2}>{item.time_of_delivery}</TableCell>
                  <TableCell rowSpan={2}>{item.gestation_at_birth}</TableCell>
                  <TableCell rowSpan={2}>{item.mode_of_delivery}</TableCell>
                  <TableCell rowSpan={2}>{item.no_of_babies_delivered}</TableCell>
                  <TableCell rowSpan={2}>{item.placenta_complete}</TableCell>
                  <TableCell rowSpan={2}>{item.uterotonic_given}</TableCell>
                  <TableCell rowSpan={2}>{item.vaginal_examination}</TableCell>
                  <TableCell rowSpan={2}>{item.blood_loss}</TableCell>
                  <TableCell rowSpan={2}>{item.mothers_status_after_delivery}</TableCell>
                  <TableCell rowSpan={1}>{item.maternal_deaths_notified}</TableCell>
                  <TableCell rowSpan={2}>{item.delivery_complications}</TableCell>
                  <TableCell rowSpan={2}>{item.apgar_score}</TableCell>
                  <TableCell rowSpan={2}>{item.birth_outcome}</TableCell>
                  <TableCell rowSpan={2}>{item.birth_weight}</TableCell>
                  <TableCell rowSpan={2}>{item.sex}</TableCell>
                  <TableCell rowSpan={1}>{item.initiated_on_BF_less_1hr}</TableCell>
                  <TableCell rowSpan={2}>{item.teo_given_at_birth}</TableCell>
                  <TableCell rowSpan={2}>{item.chlorhexidine_applied_on_cord_stump}</TableCell>
                  <TableCell rowSpan={1}>{item.birth_with_deformity}</TableCell>
                  <TableCell rowSpan={2}>{item.given_vitamin_K}</TableCell>
                  <TableCell rowSpan={1}>{item.vdrl_rpr_results}</TableCell>
                  <TableCell rowSpan={2}>{item.hiv_test_1_test_results}</TableCell>
                  <TableCell rowSpan={2}>{item.hiv_test_2_test_results}</TableCell>
                  <TableCell rowSpan={2}>{item.hiv_test_3_test_results}</TableCell>
                  <TableCell rowSpan={1}>{item.hiv_result_maternity}</TableCell>
                  <TableCell rowSpan={2}>{item.maternal_haart}</TableCell>
                  <TableCell rowSpan={2}>{item.infant_prophylaxis}</TableCell>
                  <TableCell rowSpan={2}>{item.partner_tested_for_hiv}</TableCell>
                  <TableCell rowSpan={2}>{item.counselled_on_infant_feeding}</TableCell>
                  <TableCell rowSpan={2}>{item.delivery_conducted_by}</TableCell>
                  <TableCell rowSpan={2}>{item.birth_notification_number}</TableCell>
                  <TableCell rowSpan={2}>{item.discharge_date}</TableCell>
                  <TableCell rowSpan={2}>{item.discharge_status_of_baby}</TableCell>
                  <TableCell rowSpan={2}>{item.referrals_from}</TableCell>
                  <TableCell rowSpan={2}>{item.referrals_to}</TableCell>
                  <TableCell rowSpan={2}>{item.reason_for_referral}</TableCell>
                  <TableCell rowSpan={2}>{item.comments}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={1}>{item.nupi}</TableCell>
                  <TableCell rowSpan={1}>{item.age}</TableCell>
                  <TableCell rowSpan={1}>{item.phone_number}</TableCell>
                  <TableCell rowSpan={1}>{item.maternal_deaths_notified_date}</TableCell>
                  <TableCell rowSpan={1}>{item.kangaroo_mother_care}</TableCell>
                  <TableCell rowSpan={1}>{item.birth_with_deformity_type}</TableCell>
                  <TableCell rowSpan={1}>{}</TableCell>
                  <TableCell rowSpan={1}>{reportData.hiv_result_maternity_type}</TableCell>
                </TableRow>
              </React.Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={19}>No data available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default MOH333;
